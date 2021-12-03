namespace Book.Api.Models
{
    public class UpdateBookModel
    {

        /// Klass som hanterar kommunikationen från frontend put call
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public int Rating { get; set; }
        public DateTime YearReleased { get; set; }
    }
}
