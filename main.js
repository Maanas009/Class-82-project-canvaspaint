canvas = document.getElementById("myCanvas");
asd = canvas.getContext("2d");

var mouse_event = "empty";

var last_position_of_x, last_position_of_y;

var color = "maroon";

var width = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouse_event = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mousedown")
    {           
        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

        asd.beginPath();
        asd.strokeStyle = "black";
        asd.lineWidth = 2;
        asd.arc(current_position_of_mouse_x, current_position_of_mouse_y, 50, 0, 2 * Math.PI);
        asd.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}