const careerYear = document.getElementById("year");

const careerList = [
    {
        category: ["Category", "Technology", "Commercial"],
        year: ["Year", "2021", "2022", "2023"]
    }
];

const setCareerCategory = obj => {
    const careerCategory = document.getElementById("category");
    let container = [];
    
    obj.forEach(item =>{
        const li = document.createElement("li");
        // li.value = item.category;
        li.innerHTML = item.category;
        // console.log(item.category);
        // careerCategory.appendChild(li);
        container.push(li);
    });
    // console.log(container);
}
// setCareerCategory(careerList);

const setCareerYeay = obj => {
    obj.forEach(item =>{
        console.log(item.category);
        console.log(item.year);
    });
}

// setCareer(careerList);


// (enlargeJobDetails = () => {
//     document.getElementById("join-us--job_detail").style.display = "block";
// });

const enlargeJobDetails = () => {
    document.querySelector(".careers--job_detail").style.display = "block";
}

// .join-us--job_listing 
const checkCareer = () => {
    const category = document.getElementById("category").value;
    const year = document.getElementById("year").value;
    // document.getElementsByClassName("join-us--job_listing")

    if ((category == "") && (year == ""))
    {
        console.log("Input 2 fields");
    }
    else 
    {
        if ((category == "Commercial" && year != " ") && (year == "2023" && category != ""))
        {
            // document.getElementById("join-us--job_detail").style.display = "block";
            document.querySelector(".careers--job_listing").style.display = "grid";
            document.querySelector(".no-job").style.display = "none";
        }else{
            document.querySelector(".careers--job_listing").style.display = "none";
            document.querySelector(".no-job").style.display = "block";
            document.querySelector(".careers--job_detail").style.display = "none";
        }
    }
}

