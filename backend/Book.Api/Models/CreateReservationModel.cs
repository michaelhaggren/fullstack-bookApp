namespace Book.Api.Models
{
    public class CreateReservationModel
    {
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public int Price { get; set; }
        public DateTime DateReserved { get; set; }
    }
}
