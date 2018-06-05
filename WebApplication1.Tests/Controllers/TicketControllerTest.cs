using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebApplication1;
using WebApplication1.Controllers;
using WebAPI.Controllers;

namespace WebApplication1.Tests.Controllers
{
    [TestClass]
    public class TicketControllerTest
    {
        [TestMethod]
        public void Get()
        {
            var res = "[[53.47721822541966,42.53731343283582,'Ticket1']," +
                            "[42.92565947242206,12.313432835820896,'Ticket2']," +
                            "[27.577937649880095,89.55223880597015,'Ticket3']]";

            // Arrange
            TicketController controller = new TicketController();

            // Act
            string result = controller.GetAllTickets("US");

            // Assert
            Assert.IsNotNull(result);
            Assert.AreNotEqual("", result);
            Assert.AreEqual(res, result);
        }

    }
}
