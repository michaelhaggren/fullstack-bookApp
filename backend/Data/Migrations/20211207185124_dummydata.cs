using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class dummydata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("9e24a494-76e2-4e4c-a0eb-5d2a1816c71f"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("9fa56fa8-dd1d-45ac-8121-4f6f46df4e22"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("aa0baa0e-13be-43f4-95a3-286e7e84ccce"));

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Rating", "Title", "YearReleased" },
                values: new object[,]
                {
                    { new Guid("2acc3817-6640-4010-92bd-3c05d18bcc14"), "Marcel Proust", 4, " In Search of Lost Time", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified).AddTicks(1913) },
                    { new Guid("58ebe209-350c-4517-933a-d418fd175ca3"), "Daniel Defoe", 4, "Robinson Crusoe", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified).AddTicks(1719) },
                    { new Guid("5d55ed87-c56c-4aed-8a3e-f469734cbacf"), "J.Guillou", 5, "Ondskan", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified).AddTicks(2007) },
                    { new Guid("70d5682a-414c-48ea-9ff0-5cf51180a172"), "Miguel de Cervantes", 5, "Don Quixote", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified).AddTicks(1605) },
                    { new Guid("84c785e8-cc0d-42bd-afd6-0e3534691063"), "V. Moberg", 5, "Utvandrarna", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified).AddTicks(1949) },
                    { new Guid("bbf1ffea-c567-4089-b83e-0cc553eb6933"), "Herman Melville", 5, "Moby Dick", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified).AddTicks(1851) }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("2acc3817-6640-4010-92bd-3c05d18bcc14"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("58ebe209-350c-4517-933a-d418fd175ca3"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("5d55ed87-c56c-4aed-8a3e-f469734cbacf"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("70d5682a-414c-48ea-9ff0-5cf51180a172"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("84c785e8-cc0d-42bd-afd6-0e3534691063"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("bbf1ffea-c567-4089-b83e-0cc553eb6933"));

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
    }
}
