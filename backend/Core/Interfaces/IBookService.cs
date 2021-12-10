using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Models;

namespace Core.Interfaces
{
    public interface IBookService
    {
        Task<BookModel> GetBookAsync(Guid id);
        Task<IEnumerable<BookModel>> GetBooksAsync();
        Task<BookModel> AddBookAsync(BookModel book);
        Task<BookModel> PutBookAsync(BookModel book);
        Task DeleteBookAsync(Guid id);
    }
}
