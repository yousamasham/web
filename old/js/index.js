function toggleResume(){
    var resumeViewer = document.getElementById("rv")

    if (resumeViewer.style.display == "block" && resumeViewer.style.visibility == "visible"){
        resumeViewer.style.display = "none"
        resumeViewer.style.visibility = "hidden"
    }

    else {
        resumeViewer.style.display = "block"
        resumeViewer.style.visibility = "visible"
    }
}