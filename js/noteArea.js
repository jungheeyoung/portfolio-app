
        window.onload = init
        //onload시에 버튼에 이벤트 첨가
        function init() {
            //버튼 id를 가져옴
            var button = document.getElementById("addButton")
            button.onclick = handleButtonClick
        }

        //버튼을 누를때 실행되는 내용
        function handleButtonClick() {
            //입력박스의 id를 가져온다
            var textInput = document.getElementById("textInput")
            //박스에 입력된 value가져오기
            var value = textInput.value
            //공란으로 글을 입력할 때 조건문으로 제외
            //문자가 입력되어졌을 때는 li노드를 생성하고 생성된 li에다가 innerHtml을 이용해서 화면에 글표시

            if (value == "") {
                alert("내용을 입력하세요")
            } else {
                var li = document.createElement("li")
                li.innerHTML = value
                var ul = document.getElementById("note")
                ul.appendChild(li)
                document.getElementById("textInput").value = ""
            }
        }