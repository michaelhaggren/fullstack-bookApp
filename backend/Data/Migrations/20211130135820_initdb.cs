using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class initdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Author = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    YearReleased = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Rating", "Title", "YearReleased" },
                values: new object[] { new Guid("9e24a494-76e2-4e4c-a0eb-5d2a1816c71f"), "V. Moberg", 5, "Utvandrarna", new DateTime(1949, 5, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Rating", "Title", "YearReleased" },
                values: new object[] { new Guid("9fa56fa8-dd1d-45ac-8121-4f6f46df4e22"), "J.Guillou", 5, "Ondskan", new DateTime(2007, 5, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Rating", "Title", "YearReleased" },
                values: new object[] { new Guid("aa0baa0e-13be-43f4-95a3-286e7e84ccce"), "D. Owens", 5, "Där kräftorna sjunger ", new DateTime(2020, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
