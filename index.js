const shapes = ["square", "diamond", "rectangle", "circle", "triangle"];

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

  alert("Container For Shapes Created");
});

function shapeSelector(digit) {
  selectShapeDiv.innerHTML = "";
  let shapeContainerEl = document.getElementById(`shapeContainer${digit}`);
  console.log(shapeContainerEl);
  const selectShapeDropDown = document.createElement("select");
  for (let i = 0; i <= shapes.length - 1; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", `${shapes[i]}`);
    option.textContent = `${shapes[i]}`;
    selectShapeDropDown.appendChild(option);
  }
  selectShapeDiv.appendChild(selectShapeDropDown);
  selectShapeDropDown.addEventListener("change", (event) => {
    let selectedShape = event.target.value;
    event.target.value = "";
    console.log(selectedShape);
    let shape = document.createElement("div");
    switch (selectedShape) {
      case "square":
        shape.style.width = "60px";
        shape.style.height = "60px";
        shape.style.backgroundColor = " #1d3c6b";
        shape.classList.add("square");
        shape.style.margin = "6px";
        break;
      case "diamond":
        shape.style.width = "52px";
        shape.style.height = "52px";
        shape.style.backgroundColor = " #1d3c6b";
        shape.style.transform = "rotate(45deg)";
        shape.classList.add("diamond");
        shape.style.margin = "6px";
        break;
      case "rectangle":
        shape.style.width = "90px";
        shape.style.height = "60px";
        shape.style.backgroundColor = " #1d3c6b";
        shape.classList.add("rectangle");
        shape.style.margin = "6px";
        break;
      case "circle":
        shape.style.width = "60px";
        shape.style.height = "60px";
        shape.style.borderRadius = "50%";
        shape.style.backgroundColor = " #1d3c6b";
        shape.classList.add("circle");
        shape.style.margin = "6px";
        break;
      case "triangle":
        shape.style.width = 0;
        shape.style.height = 0;
        shape.style.borderLeft = "30px solid transparent";
        shape.style.borderRight = "30px solid transparent";
        shape.style.borderBottom = "60px solid  #1d3c6b";
        shape.classList.add("triangle");
        shape.style.margin = "6px";
        break;
    }

    shapeContainerEl.appendChild(shape);
  });
}

selectContainer.addEventListener("change", (event) => {
  let shapeContainerNumber = event.target.value.slice(-1);
  console.log(shapeContainerNumber);
  shapeSelector(shapeContainerNumber);
});
