namespace Book.Api.Models
{
    public class AddBookModel
    {

        /// Klass som hanterar kommunikationen från frontend post call
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public int Rating { get; set; }
        public DateTime YearReleased { get; set; }
    }
}
