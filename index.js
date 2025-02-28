const shapes = ["square", "diamond", "rectangle", "circle", "triangle"];

const createDivEl = document.getElementById("createDiv");
const containers = document.getElementById("containers");
const selectContainer = document.getElementById("selectCont");
let containerCount = 0;
const selectShapeDiv = document.getElementById("selectShape");

createDivEl.addEventListener("click", () => {
  containerCount++;
  const container = document.createElement("div");
  container.setAttribute("id", `cont${containerCount}`);
  container.classList.add("div-style");

  const headingDiv = document.createElement("div");
  headingDiv.classList.add("headingContainer");
  const headingPara = document.createElement("p");
  headingPara.textContent = `Shape Container ${containerCount}`;
  headingPara.style.textAlign = "center";
  const horizontalLine = document.createElement("hr");

  headingDiv.appendChild(headingPara);
  headingDiv.appendChild(horizontalLine);
  container.appendChild(headingDiv);

  const shapeContainer = document.createElement("div");
  shapeContainer.setAttribute("id", `shapeContainer${containerCount}`);
  shapeContainer.classList.add("shapeContainer");
  container.appendChild(shapeContainer);
  containers.appendChild(container);

  const option = document.createElement("option");
  option.setAttribute("id", `container${containerCount}`);
  option.setAttribute("value", `Container${containerCount}`);
  option.textContent = `Container ${containerCount}`;
  selectContainer.appendChild(option);

  alert("Container For Shapes Created");
  updateDisplay();
});

selectContainer.addEventListener("change", (event) => {
  let shapeContainerNumber = event.target.value.slice(-1);
  shapeSelector(shapeContainerNumber);
});

function shapeSelector(digit) {
  selectShapeDiv.innerHTML = "";
  let shapeContainerEl = document.getElementById(`shapeContainer${digit}`);

  const selectShapeDropDown = document.createElement("select");
  selectShapeDropDown.setAttribute("id", "shapeDropdown");
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select a shape";
  defaultOption.value = "";
  selectShapeDropDown.appendChild(defaultOption);

  for (let i = 0; i < shapes.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", shapes[i]);
    option.textContent = shapes[i];
    selectShapeDropDown.appendChild(option);
  }

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Add Shape";
  submitBtn.style.marginLeft = "10px";

  selectShapeDiv.appendChild(selectShapeDropDown);
  selectShapeDiv.appendChild(submitBtn);

  submitBtn.addEventListener("click", () => {
    const selectedShape = selectShapeDropDown.value;
    if (!selectedShape) return;

    addShape(shapeContainerEl, selectedShape);

    selectShapeDropDown.value = "";
  });
}

function addShape(shapeContainerEl, selectedShape) {
  console.log(shapeContainerEl, selectedShape);
  const size = 60;
  const shape = document.createElement("div");
  shape.style.display = "inline-block";
  shape.style.marginLeft = "2px";

  switch (selectedShape) {
    case "square":
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.backgroundColor = "#1d3c6b";
      shape.classList.add("square");
      break;
    case "diamond":
      shape.style.width = `${size * 0.87}px`;
      shape.style.height = `${size * 0.87}px`;
      shape.style.backgroundColor = "#1d3c6b";
      shape.style.transform = "rotate(45deg)";
      shape.classList.add("diamond");
      shape.style.margin = "10px";
      break;
    case "rectangle":
      shape.style.width = `${size * 1.5}px`;
      shape.style.height = `${size}px`;
      shape.style.backgroundColor = "#1d3c6b";
      shape.classList.add("rectangle");
      break;
    case "circle":
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.borderRadius = "50%";
      shape.style.backgroundColor = "#1d3c6b";
      shape.classList.add("circle");
      break;
    case "triangle":
      shape.style.width = 0;
      shape.style.height = 0;
      shape.style.borderLeft = `${size / 2}px solid transparent`;
      shape.style.borderRight = `${size / 2}px solid transparent`;
      shape.style.borderBottom = `${size}px solid #1d3c6b`;
      shape.classList.add("triangle");
      break;
  }

  if (hasEnoughSpace(shapeContainerEl, shape)) {
    if (shapeContainerEl.children.length === 0) {
      shapeContainerEl.appendChild(shape);
    } else {
      let newsize = shapeContainerEl.children[0].getBoundingClientRect().width;
      const shape = document.createElement("div");
      shape.style.display = "inline-block";
      shape.style.marginLeft = "2px";
      switch (selectedShape) {
        case "square":
          shape.style.width = `${newsize}px`;
          shape.style.height = `${newsize}px`;
          shape.style.backgroundColor = "#1d3c6b";
          shape.classList.add("square");
          break;
        case "diamond":
          shape.style.width = `${newsize * 0.87}px`;
          shape.style.height = `${newsize * 0.87}px`;
          shape.style.backgroundColor = "#1d3c6b";
          shape.style.transform = "rotate(45deg)";
          shape.classList.add("diamond");
          shape.style.margin = "10px";

          break;
        case "rectangle":
          shape.style.width = `${newsize * 1.5}px`;
          shape.style.height = `${newsize}px`;
          shape.style.backgroundColor = "#1d3c6b";
          shape.classList.add("rectangle");
          break;
        case "circle":
          shape.style.width = `${newsize}px`;
          shape.style.height = `${newsize}px`;
          shape.style.borderRadius = "50%";
          shape.style.backgroundColor = "#1d3c6b";
          shape.classList.add("circle");
          break;
        case "triangle":
          shape.style.width = 0;
          shape.style.height = 0;
          shape.style.borderLeft = `${newsize / 2}px solid transparent`;
          shape.style.borderRight = `${newsize / 2}px solid transparent`;
          shape.style.borderBottom = `${newsize}px solid #1d3c6b`;
          shape.classList.add("triangle");
          break;
      }
      shapeContainerEl.appendChild(shape);
    }
  } else {
    if (shapeContainerEl.children.length > 0) {
      const referenceChildHeight =
        shapeContainerEl.children[0].getBoundingClientRect().height;
      const referenceChildWidth =
        shapeContainerEl.children[0].getBoundingClientRect().width;
      let size = referenceChildHeight || referenceChildWidth;
      if (size > 20) {
        size -= 10;
        resizeShapes(shapeContainerEl, size);
      } else {
        alert("No more shapes can be added as max 20px size is reached.");
      }
    }
  }
}

function hasEnoughSpace(shapeContainerEl, shape) {
  shapeContainerEl.appendChild(shape);
  const shapeSize = shape.getBoundingClientRect();
  const shapeContainerElSize = shapeContainerEl.getBoundingClientRect();
  const hasAvailSpace =
    shapeSize.bottom <= shapeContainerElSize.bottom &&
    shapeSize.right <= shapeContainerElSize.right;
  shapeContainerEl.removeChild(shape);
  if (hasAvailSpace) {
    return true;
  } else {
    return false;
  }
}

function resizeShapes(shapeContainerEl, size) {
  const childrenElements = shapeContainerEl.children;
  console.log(childrenElements);
  for (let i = 0; i < childrenElements.length; i++) {
    let shape = shapeContainerEl.children[i];
    shape.removeAttribute("style");
    shape.style.display = "inline-block";
    shape.style.marginLeft = "2px";
    switch (shape.className) {
      case "square":
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.backgroundColor = "#1d3c6b";
        break;
      case "diamond":
        shape.style.width = `${size * 0.87}px`;
        shape.style.height = `${size * 0.87}px`;
        shape.style.backgroundColor = "#1d3c6b";
        shape.style.transform = "rotate(45deg)";
        shape.style.marginRight = "10px";
        shape.style.marginLeft = "10px";
        break;
      case "rectangle":
        shape.style.width = `${size * 1.5}px`;
        shape.style.height = `${size}px`;
        shape.style.backgroundColor = "#1d3c6b";
        break;
      case "circle":
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.borderRadius = "50%";
        shape.style.backgroundColor = "#1d3c6b";
        break;
      case "triangle":
        shape.style.width = 0;
        shape.style.height = 0;
        shape.style.borderLeft = `${size / 2}px solid transparent`;
        shape.style.borderRight = `${size / 2}px solid transparent`;
        shape.style.borderBottom = `${size}px solid #1d3c6b`;
        break;
    }
  }
}
// Pagination code goes from here
let currentPage = 1;
const itemsPerDiv = 3;

function getShapeContainers() {
  return document.getElementsByClassName("div-style");
}

function getTotalPages() {
  const items = getShapeContainers();
  return Math.ceil(items.length / itemsPerDiv);
}

function updateDisplay() {
  const items = getShapeContainers();
  const totalPages = getTotalPages() || 1;
  const paginationControls = document.getElementById("paginationControls");

  if (items.length <= itemsPerDiv) {
    paginationControls.style.display = "none";
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "block";
    }
  } else {
    paginationControls.style.display = "block";
    const startIndex = (currentPage - 1) * itemsPerDiv;
    const endIndex = Math.min(startIndex + itemsPerDiv, items.length);

    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }

    for (let i = startIndex; i < endIndex; i++) {
      items[i].style.display = "block";
    }

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const pageInfo = document.getElementById("pageInfo");

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  }
}

function setupPagination() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.onclick = function () {
    if (currentPage > 1) {
      currentPage--;
      updateDisplay();
    }
  };

  nextBtn.onclick = function () {
    if (currentPage < getTotalPages()) {
      currentPage++;
      updateDisplay();
    }
  };
}

document.addEventListener("DOMContentLoaded", function () {
  setupPagination();
  updateDisplay();
});
