async function getData() {
  try {
    const result = await fetch("https://api.msigma.in/btech/v2/branches/");
    if (!result.ok) {
      throw new error(`API request failed ,status :${result.status}`);
    }
    const data = await result.json();
    console.log(data);
    courses = [...data.branches];
    courses.forEach((data) => {
      console.log(data);
      let courseWrapper = document.querySelector(".courseWrapper");
      let courseContainer = document.createElement("div");
      courseContainer.classList.add("courseWrapper");
      let title = document.createElement("h2");
      title.innerHTML = data.short;
      let description = document.createElement("p");
      description.innerHTML = data.name;
      description.id = "description";
      let button = document.createElement("button");
      button.innerHTML = "Apply now";
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
