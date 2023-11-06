function getRandomColor() {
  // Generate random values for RGB components
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Create and return the random color in RGB format
  return `rgb(${r}, ${g}, ${b})`;
}

async function getData() {
  try {
    const result = await fetch("https://api.msigma.in/btech/v2/branches/");
    if (!result.ok) {
      throw new Error(`API request failed, status: ${result.status}`);
    }
    const data = await result.json();
    console.log(data);
    courses = [...data.branches];
    courses.forEach((data) => {
      console.log(data);
      let courseWrapper = document.querySelector(".courseWrapper");
      let courseContainer = document.createElement("div");
      courseContainer.classList.add("courseWrapper");

      // Generate a random color
      const randomColor = getRandomColor();

      let title = document.createElement("h2");
      title.innerHTML = data.short;
      title.style.color = randomColor; // Apply random color to h2

      let description = document.createElement("p");
      description.innerHTML = data.name;
      description.id = "description";
      let button = document.createElement("button");
      button.innerHTML = "Apply now";
      button.style.border = `1px solid ${randomColor}`; // Apply the same random color to the button border
      let pricing = document.createElement("p");
      pricing.innerHTML = "Fee starting at ₹799 per subject";
      pricing.id = "pricing";
      courseContainer.append(title, description, button, pricing);
      courseWrapper.append(courseContainer);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
