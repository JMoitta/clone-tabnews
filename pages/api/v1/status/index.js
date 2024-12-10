import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const resultVersion = await database.query("SHOW server_version;");
  const { server_version: version } = resultVersion.rows[0];

  const resultMaxConnections = await database.query("SHOW max_connections;");
  const max_connections = Number(resultMaxConnections.rows[0].max_connections);

  const databaseName = process.env.POSTGRES_DB;
  const result = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const opened_connections = result.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version,
        max_connections,
        opened_connections,
      },
    },
  });
}

export default status;
