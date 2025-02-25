const shapes = ["square", "diamond", "rectangle", "cricle", "triangle"];

const createDivEl = document.getElementById("createDiv");
const containers = document.getElementById("containers");
const selectContainer = document.getElementById("selectCont");
let containerCount = 0;
const selectShapeDiv = document.getElementById("selectShape");

createDivEl.addEventListener("click", () => {
  containerCount++;
  // create shapeContainer div in Containers
  const container = document.createElement("div");
  container.setAttribute("id", `cont${containerCount}`);
  container.classList.add("div-style");
  // create a Heading Div- create paragraph for heading and style it and append it to the container
  const headingDiv = document.createElement("div");
  headingDiv.classList.add("headingContainer");
  const headingPara = document.createElement("p");
  headingPara.textContent = `Shape Container ${containerCount}`;
  headingPara.style.textAlign = "center";
  const horizontalLine = document.createElement("hr");
  // append headingpara to heading div
  headingDiv.appendChild(headingPara);
  headingDiv.appendChild(horizontalLine);
  container.appendChild(headingDiv);
  //  create Shape Container
  const shapeContainer = document.createElement("div");
  shapeContainer.setAttribute("id", `shapeContainer${containerCount}`);
  shapeContainer.classList.add("shapeContainer");
  // append to container
  container.appendChild(shapeContainer);
  containers.appendChild(container);

  // Add option respective to the container added in select
  const option = document.createElement("option");
  option.setAttribute("id", `container${containerCount}`);
  option.setAttribute("value", `Container${containerCount}`);
  option.textContent = `Container ${containerCount}`;
  selectContainer.appendChild(option);
  selectContainer.addEventListener("change", () => {
    shapeSelector();
  });
  alert("Container For Shapes Created");
});

function shapeSelector(id) {
  selectShapeDiv.innerHTML = "";
  let containerId = `container${id}`;
  const selectShapeDropDown = document.createElement("select");
  for (let i = 0; i <= shapes.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", `${shapes[i]}`);
    option.createTextNode = `${shapes[i]}`;
    selectShapeDropDown.appendChild(option);
  }
  selectShapeDiv.appendChild(selectShapeDiv);
}

// ---------------------------------Pagination
// const cardsPerPage = 2; // Number of cards to show per page
// const pagination = document.getElementById("pagination");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");
// const pageNumbers = document.getElementById("page-numbers");
// const pageLinks = document.querySelectorAll(".page-link");

// // const cards = Array.from(dataContainer.getElementsByClassName("card"));

// // Calculate the total number of pages
// const totalPages = Math.ceil(cards.length / cardsPerPage);
// let currentPage = 1;

// // Function to display cards for a specific page
// function displayPage(page) {
//   const startIndex = (page - 1) * cardsPerPage;
//   const endIndex = startIndex + cardsPerPage;
//   cards.forEach((card, index) => {
//     if (index >= startIndex && index < endIndex) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// }

// // Function to update pagination buttons and page numbers
// function updatePagination() {
//   pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
//   prevButton.disabled = currentPage === 1;
//   nextButton.disabled = currentPage === totalPages;
//   pageLinks.forEach((link) => {
//     const page = parseInt(link.getAttribute("data-page"));
//     link.classList.toggle("active", page === currentPage);
//   });
// }

// // Event listener for "Previous" button
// prevButton.addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     displayPage(currentPage);
//     updatePagination();
//   }
// });

// // Event listener for "Next" button
// nextButton.addEventListener("click", () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     displayPage(currentPage);
//     updatePagination();
//   }
// });

// // Event listener for page number buttons
// pageLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const page = parseInt(link.getAttribute("data-page"));
//     if (page !== currentPage) {
//       currentPage = page;
//       displayPage(currentPage);
//       updatePagination();
//     }
//   });
// });

// // Initial page load
// displayPage(currentPage);
// updatePagination();
