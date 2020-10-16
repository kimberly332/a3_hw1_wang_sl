(() => {

    // make an AJAX request using the Fetch API
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {      
        
        // handleData
        // here's where you would call the function that puts the pieces on the page
        handleDataSet(data);
        })
    .catch((err) => {
        console.log(err);
    })

    let courseDiv = document.querySelector(".profPanelText"),
        courseTemplate = document.querySelector("#course-template").content; // grab the content inside the template

        
        
    function handleDataSet(data) {
           
            // make a copy of your template here and then
            // populate the children (text elements) with
            // the static data from the Team object    
            let currentCourse = courseTemplate.cloneNode(true),
                currentCourseText = currentCourse.querySelector(".course").children;
            
            let temp = document.querySelector("#course-template"),
                courseID = temp.content.querySelector(".text-primary");

            let copy = courseID;
            copy.innerHTML = " - " + data.coursecode;
            
             currentCourseText[0].innerHTML = data.coursename;
             currentCourseText[0].appendChild(copy);

             currentCourseText[1].innerHTML += data.profname;
             currentCourseText[2].innerHTML += data.classtime;
        
             courseDiv.appendChild(currentCourse);
    }
})();