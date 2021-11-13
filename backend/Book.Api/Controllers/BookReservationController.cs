using Book.Api.Models;
using Core.Interfaces;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Book.Api.Controllers;
[ApiController]
[Route("[controller]")]
public class BookReservationController : ControllerBase
{
    private readonly IReservationService _reservationService;

    public BookReservationController(IReservationService reservationService)
    {
        _reservationService = reservationService;
    }


    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<ReservationModel>> CreateReservation(CreateReservationModel newReservation)
    {
        var reservationModel = new ReservationModel
        {
            Title = newReservation.Title,
            Author = newReservation.Author,
            Price = newReservation.Price,
            DateReserved = newReservation.DateReserved,
        };
        var createdReservation = await _reservationService.CreateReservationAsync(reservationModel);
        return Ok(createdReservation);
    }
}
