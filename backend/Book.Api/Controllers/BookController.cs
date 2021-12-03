using Book.Api.Models;
using Core.Interfaces;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Book.Api.Controllers;
[ApiController]
[Route("api/[controller]")]
public class BookController : ControllerBase
{
    private readonly IBookService _bookService;

    public BookController(IBookService bookService)
    {
        _bookService = bookService;
    }


    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<BookModel>> AddNewBook(AddBookModel newBook)
    {
        var bookModel = new BookModel
        {
            Title = newBook.Title,
            Author = newBook.Author,
            Rating = newBook.Rating,
            YearReleased = newBook.YearReleased,
        };
        var createdBook = await _bookService.AddBookAsync(bookModel);
        return Ok(createdBook);
    }
    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult> DeleteBook(Guid id)
    {
        var book = await _bookService.GetBookAsync(id);
        /// Validerar så boken finns
        if (book == null)
        {
            return NotFound();
        }
        await _bookService.DeleteBookAsync(id);
        return NoContent();
    }

    [HttpGet("{id}")]
    [ActionName("GetBookAsync")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<BookModel>> GetBookByIdAsync(Guid id)
    {
        var book = await _bookService.GetBookAsync(id);
        /// Validerar så boken finns
        if (book == null)
        {
            return NotFound();
        }
        return Ok(book);
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<List<BookModel>>> GetBooksAsync()
    {
        var books = await _bookService.GetBooksAsync();
        return Ok(books);
    }
    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> UpdateBookAsync(Guid id, UpdateBookModel updateBookModel)
    {
        ///Validerar så id matchar den book som skickar API put method
        if (id != updateBookModel.Id)
        {
            return BadRequest();
        }
        var book = _bookService.GetBookAsync(id);
        ///Validerar så id finns
        if (book == null)
        {
            return NotFound();
        }
        var bookModel = new BookModel
        {
            Id = id,
            Title = updateBookModel.Title,
            Author = updateBookModel.Author,
            Rating = updateBookModel.Rating,
            YearReleased = updateBookModel.YearReleased,
        };
        var updatedBook = await _bookService.PutBookAsync(bookModel);
        return NoContent();
    }
}
