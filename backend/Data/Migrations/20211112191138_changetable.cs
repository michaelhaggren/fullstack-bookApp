using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class changetable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Reservations",
                keyColumn: "Id",
                keyValue: new Guid("1a94627e-95c9-4e1c-b181-a7ba58add5ac"));

            migrationBuilder.InsertData(
                table: "Reservations",
                columns: new[] { "Id", "Author", "DateReserved", "Price", "Title" },
                values: new object[] { new Guid("92a64c1d-12f5-444b-9026-821ff5d634ff"), "J.Guillou", new DateTime(2021, 11, 12, 19, 11, 38, 247, DateTimeKind.Utc).AddTicks(2711), 17, "Ondskan" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Reservations",
                keyColumn: "Id",
                keyValue: new Guid("92a64c1d-12f5-444b-9026-821ff5d634ff"));

            migrationBuilder.InsertData(
                table: "Reservations",
                columns: new[] { "Id", "Author", "DateReserved", "Price", "Title" },
                values: new object[] { new Guid("1a94627e-95c9-4e1c-b181-a7ba58add5ac"), "J.Guillou", new DateTime(2021, 11, 12, 0, 0, 0, 0, DateTimeKind.Local), 17, "Ondskan" });
        }
    }
}
