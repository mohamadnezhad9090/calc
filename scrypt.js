$("document").ready(
    function(){
        $(".sub").click(
            function(){
                $(".body").toggleClass("body2")
                $(".calc").toggleClass("calc2")
                $(".title").toggleClass("title2")
                $(".num, .monitor").toggleClass("style2")
                $(".footer").toggleClass("footer2")
            }
        )

        // $(".num").click(
        //     function(){
        //         let a = $(this).text();
        //         $(".monitor").append(a);
        //     }
        // )
        // $(".ac").click(
        //     function () {
        //         $(".monitor").text("");
        //     }
        // )
        // $(".equal").click(
        //     function(){
        //         $(".monitor").text("");
        //         for(let i = 0 ; i < last_monitor.length - 1 ; i++){
        //             // console.log(last_monitor[i]);
                    
        //         }
        //     }
        // )

        let monitor = $(".monitor");
        let num = $(".num");
        num.click(
            function(){
                let num_text = $(this).text();
                if(num_text == 'AC'){
                    monitor.val("");
                } else if(num_text == "="){
                    try{
                        monitor.val(eval(monitor.val()));
                    } catch (error){
                        monitor.val("Error");
                    }
                } else{
                    monitor.val(monitor.val() + num_text);
                }                
            }
        )
    }
)
