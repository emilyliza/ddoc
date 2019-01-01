var words = [];
var myWordCloud = wordCloud('#wordCloudBox');

$.getJSON("https://spreadsheets.google.com/feeds/cells/1aEuuC49_hTMEIsycU2xLL0m9eITOpEXJyoodS_wckNE/default/public/values?alt=json", function(data) {
    for (var i = 0; i < data.feed.entry.length; i++){
        words2.push(data.feed.entry[i]['gs$cell']['$t']);
    }
    count();
    showNewWords(myWordCloud);
    console.log(words);
   });


var words2 = [];

var test2 = ["earth", "fear"];

function count() {
    words2.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < words2.length; i++) {
        if (words2[i] != current) {
            if (cnt > 0) {
                words.push({ text: current, count: cnt});
            }
            current = words2[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        words.push({ text: current, count: cnt});
    }
}

var request, 
    inputsArr;

// Bind to the submit event of our form
$("#testForm").submit(function(event){

    // Prevent default posting of form
    event.preventDefault();

    // Abort any pending request
    if (request) {
        request.abort();
    }
    var $form = $(this);
    var $inputs = $form.find("input,text");
    var serializedData = $form.serialize();

    // inputsArr = $form.serializeArray();
    // console.log(inputsArr);

    // disable the inputs for the duration of the Ajax request.
    $inputs.prop("disabled", true);

    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyjera18LFXsy_iw7KmnTvos87kbvjGpzECCB6QlmHe2e2YOSk/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        console.log("Hooray, it worked!", response);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

   document.getElementById("testForm").reset();

   $.getJSON("https://spreadsheets.google.com/feeds/cells/1aEuuC49_hTMEIsycU2xLL0m9eITOpEXJyoodS_wckNE/default/public/values?alt=json", function(data) {
    for (var i = 0; i < data.feed.entry.length; i++){
        words.push(data.feed.entry[i]['gs$cell']['$t']);
    }
    count();
    showNewWords(myWordCloud);
   });
});

// var input_color = "#000000";

// function check_for_input(input) {
//     test.forEach(function (item) {
//      var item = item.value;
//      if (input == item){
//         return true;
//      } else {
//        return false;
//      }
//   });

// }

// Encapsulate the word cloud functionality
function wordCloud(selector) {

    var fill = d3.scale.category20();
    

    //Construct the word cloud's SVG element
    var svg = d3.select(selector).append("svg")
        .attr("width", 420)
        .attr("height", 420)
        .append("g")
        .attr("transform", "translate(210,215)");

    // var circleSelection = svg.append("circle")
    //     .attr("cx", 0)
    //     .attr("cy", 25)
    //     .attr("r", 200)
    //     // .style("fill", "purple");

    //Draw the word cloud
    function draw(words) {
        var cloud = svg.selectAll("g text")
                        .data(words, function(d) { return d.text; })         

        //Entering words
        cloud.enter()
            .append("text")
            .style("font-family", "Arial")
            .style("fill", function(d, i) {if (test2.indexOf(d.text) > -1) {return "black"; } else {return fill(i);} })
            // .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr('font-size', 1)
            .text(function(d) { return d.text; });

        //Entering and existing words
        cloud
            .transition()
                .duration(600)
                .style("font-size", function(d) { return d.size + "px"; })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("fill-opacity", 1);

        //Exiting words
        cloud.exit()
            .transition()
                .duration(200)
                .style('fill-opacity', 1e-6)
                .attr('font-size', 1)
                .remove();
    }


    //Use the module pattern to encapsulate the visualisation code. We'll
    // expose only the parts that need to be public.
    return {

        //Recompute the word cloud for a new set of words. This method will
        // asycnhronously call draw when the layout has been computed.
        //The outside world will need to call this function, so make it part
        // of the wordCloud return value.
        update: function(words) {
            d3.layout.cloud().size([380, 380])
                .words(words)
                // .padding(2)
                // .rotate(function() { return ~~(Math.random() * 2) * 90; })
                // .rotate(function() { return ~~(Math.random() * 6 - 3) * 30; })
                // .rotate(function() { return ~~(Math.random() * 6 - 3) * 30; })
                .font("Arial")
                .fontSize(function(d) { return d.size; })
                .on("end", draw)
                .start();
        }
    }

}



//Prepare by removing punctuation,
// creating an array of words and computing a random size attribute.
function getWords(i) {
    var size = d3.scaleLinear().range([0, 13]).domain([0, d3.max(words, d => d.count)]);
    return words
            // .replace(/[!\.,:;\?]/g, '')
            // .split(' ')
            .map(function(d) {
                return { text: d.text, size: 9 + size(d.count) * 3.5 };

                // return {text: d, size: 10 + Math.random() * 30};
            })
}

//This method tells the word cloud to redraw with a new set of words.
function showNewWords(vis, i) {
    i = i || 0;

    vis.update(getWords(i ++ % words.length));
    // setTimeout(function() { showNewWords(vis, i + 1)}, 2000)
}




