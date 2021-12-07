using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class dummData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                values: new object[,]
                {
                    { new Guid("44d65caa-c981-4866-ba71-9f305fd9ca6b"), "J.Guillou", 5, "Ondskan", new DateTime(2007, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { new Guid("ceacba30-8aab-4bc6-9580-5b646b740ea3"), "V. Moberg", 5, "Utvandrarna", new DateTime(1949, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { new Guid("e29531bf-de5f-4dff-8bf2-db2962341826"), "Marcel Proust", 4, " In Search of Lost Time", new DateTime(1913, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { new Guid("eb34d06e-ac23-4f92-ab13-1168d1b873bf"), "Daniel Defoe", 4, "Robinson Crusoe", new DateTime(1719, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { new Guid("f7750f1a-3ae5-419b-a320-8ff327650d91"), "Miguel de Cervantes", 5, "Don Quixote", new DateTime(1605, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { new Guid("fdfe2eeb-b63b-4b47-a31f-b0bfc1670fd4"), "Herman Melville", 5, "Moby Dick", new DateTime(1851, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("44d65caa-c981-4866-ba71-9f305fd9ca6b"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("ceacba30-8aab-4bc6-9580-5b646b740ea3"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("e29531bf-de5f-4dff-8bf2-db2962341826"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("eb34d06e-ac23-4f92-ab13-1168d1b873bf"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("f7750f1a-3ae5-419b-a320-8ff327650d91"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("fdfe2eeb-b63b-4b47-a31f-b0bfc1670fd4"));

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
    }
}
