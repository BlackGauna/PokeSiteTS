import { getColumns, type SQL, sql } from "drizzle-orm"
import { getTableConfig, type PgTable } from "drizzle-orm/pg-core"

// got base from drizzle docs: https://orm.drizzle.team/docs/guides/upsert
export const buildOnConflictUpdateConfig = <T extends PgTable>(table: T) => {
  type columnType = keyof T["_"]["columns"]

  const cls = getColumns(table)
  const primaryKeys = getTableConfig(table).columns.filter(col => col.primary)

  const columns = Object.keys(cls) as columnType[]

  const setColumns = columns.reduce(
    (acc, column) => {
      const colName = cls[column]?.name
      if (!colName) return acc

      acc[column] = sql.raw(`excluded."${colName}"`)

      return acc
    },
    {} as Record<columnType, SQL>,
  )

  return { target: primaryKeys, set: setColumns }
}

export const buildOnConflictUpdateColumns = <T extends PgTable>(table: T) => {
  type columnType = keyof T["_"]["columns"]

  const cls = getColumns(table)

  const columns = Object.keys(cls) as columnType[]

  return columns.reduce(
    (acc, column) => {
      const colName = cls[column]?.name
      if (!colName) return acc

      acc[column] = sql.raw(`excluded."${colName}"`)

      return acc
    },
    {} as Record<columnType, SQL>,
  )
}
