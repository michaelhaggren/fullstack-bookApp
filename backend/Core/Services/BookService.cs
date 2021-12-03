using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Interfaces;
using Core.Models;
using Data.Entities;
using Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Core.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;

        public BookService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }
        public async Task<BookModel> AddBookAsync(BookModel book)
        {
            if (book == null)
            {
                throw new ArgumentNullException(nameof(book));
            }
            var bookEntity = new Book
            {
                Title = book.Title,
                Author = book.Author,
                Rating = book.Rating,
                YearReleased = book.YearReleased,
            };
            bookEntity = await _bookRepository.AddAsync(bookEntity);
            return new BookModel
            {
                Id = bookEntity.Id,
                Title = bookEntity.Title,
                Author = bookEntity.Author,
                Rating = bookEntity.Rating,
                YearReleased = bookEntity.YearReleased,
            };
        }

        public async Task DeleteBookAsync(Guid id)
        {
            await _bookRepository.DeleteAsync(id);
        }

        public async Task<BookModel> GetBookAsync(Guid id)
        {
            var bookEntity = await _bookRepository.FindAsync(id);
            if (bookEntity == null)
            {
                return null;
            }
            return new BookModel
            {
                Id = bookEntity.Id,
                Title = bookEntity.Title,
                Author = bookEntity.Author,
                Rating = bookEntity.Rating,
                YearReleased = bookEntity.YearReleased,
            };
        }

        public async Task<List<BookModel>> GetBooksAsync()
        {
            IQueryable<Book> query = _bookRepository.GetBooks();
            return await query.Select(book => new BookModel
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                Rating = book.Rating,
                YearReleased = book.YearReleased,
            }).ToListAsync();
        }

        public async Task<BookModel> PutBookAsync(BookModel book)
        {
            var bookEntity = new Book
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                Rating = book.Rating,
                YearReleased = book.YearReleased,
            };
            bookEntity = await _bookRepository.PutAsync(bookEntity);
            return new BookModel
            {
                Id = bookEntity.Id,
                Title = bookEntity.Title,
                Author = bookEntity.Author,
                Rating = bookEntity.Rating,
                YearReleased = bookEntity.YearReleased,
            };
        }
    }
}
