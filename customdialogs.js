document.addEventListener('DOMContentLoaded', function() {
    const alertBtn = document.getElementById('alert');
    const confirmBtn = document.getElementById('confirm');
    const promptBtn = document.getElementById('prompt');
    const safe_prompt = document.getElementById('safer_prompt');
    let ok = document.getElementById('ok');
    let cancel = document.getElementById('cancel');
    let input = document.getElementById('input');
    let dialog = document.getElementById("dialog");
    let text = document.getElementById('text');
    let result = document.getElementById('result');
    // let theResult = 'None';
    // let type = 'None';
    //let result_text = `${type} result is: ${theResult}`

    alertBtn.addEventListener('click',function() {
        dialog.open = true;
        text.innerHTML = "Alert is pressed!";
        cancel.style.display = "none";
        input.style.display = "none";
        ok.addEventListener('click',function(){
            dialog.open=false;
        }); 
    });

    confirmBtn.addEventListener('click',function() {
        let theResult = 'None';
        let type = 'None';

        type = 'Confirm';
        dialog.open = true;
        cancel.style.display = "block";
        input.style.display = "none";
        text.innerHTML = "Do you confirm this";
        cancel.addEventListener('click',function(){
            dialog.open=false;
            theResult = 'False';
            let result_text = `${type} result is: ${theResult}`;
            result.innerHTML = result_text;
            result.style.display = "block";
        });
        ok.addEventListener('click',function(){
            dialog.open=false;
            theResult = 'True';
            let result_text = `${type} result is: ${theResult}`;
            result.innerHTML = result_text;
            result.style.display = "block";
        }); 
    });

    promptBtn.addEventListener('click',function() {
        let theResult = 'None';
        let type = 'None';

        type = 'Prompt';
        dialog.open = true;
        cancel.style.display = "block";
        input.style.display = "block";
        text.innerHTML = "Please Enter Something";

        ok.addEventListener('click',function(){
            dialog.open=false;
            theResult = document.getElementById("input").value;
            theResult = DOMPurify.sanitize(theResult, {FORBID_TAGS: ['style','script']} );
            if(theResult==='') {theResult = "Nothing Entered";}
            let result_text = `${type} result is: ${theResult}`;
            result.innerHTML = result_text;
            result.style.display = "block";
        }); 

        cancel.addEventListener('click',function(){
            dialog.open=false;
            theResult = 'Nothing Entered';
            let result_text = `${type} result is: ${theResult}`;
            result.innerHTML = result_text;
            result.style.display = "block";
        });
    });
})


