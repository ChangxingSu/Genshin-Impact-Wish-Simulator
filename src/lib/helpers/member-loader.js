
export const loadMembers = (f) => {
    let reader = new FileReader();
 

    reader.onload = (e) => {
        let content = e.target.result;
        console.log(e.target.result);
    };

    reader.readAsText(f, 'UTF-8');
    while (!reader.readyState === FileReader.DONE) {
        // 空循环等待
    }

    // console.log(content);
    // return content;
}