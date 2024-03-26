document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getFromUrl").addEventListener("click", getFromUrl);
document.getElementById("getLoopUrl").addEventListener("click", getLoopUrl);

function getText(){
    /*fetch("sample.txt").then(function (res){console.log(res)})
    /*fetch("sample.txt")
    .then(function (res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
    });*/
    fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("output").innerHTML = data
    })
    .catch((err) => console.log(err));
} 
function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => { 
        let output = '<h2>Users</h2>';
        data.forEach(function(user) {
            output += 
            `<ul>
                <li>id:${user.id}</li>
                <li>name:${user.name}</li>
                <li>email:${user.email}</li>
            </ul>`;
        });
        document.getElementById("output").innerHTML = output;
    });
}
const apiUrl='https://classic.clinicaltrials.gov/api/query/full_studies?expr=heart+attack&min_rnk=1&max_rnk=10&fmt=json';
function getFromUrl(){
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
        //one onbject restult
        let study = data.FullStudiesResponse.FullStudies[2].Study.ProtocolSection.IdentificationModule;
        let output = `<h2>Clinical Trial Web result on Heart Attack:</h2>
                        <ul>
                            <li>NCTId: ${study.NCTId}</li>
                        </ul>`;
        document.getElementById("output").innerHTML = output;
    });
};

const apiUrl2='https://classic.clinicaltrials.gov/api/query/full_studies?expr=heart+attack&min_rnk=1&max_rnk=10&fmt=json';
function getLoopUrl(){
    fetch(apiUrl2)
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2>Clinical Trial Web result on Heart Attack:</h2>";
        let fetchArray = data.FullStudiesResponse.FullStudies;
        function myFunction(path) {
            output +=
            `<ul>
                <li>NCTId:${path.Study.ProtocolSection.IdentificationModule.NCTId}</li>
            </ul>`;
        };
        fetchArray.forEach(myFunction);
        document.getElementById("output").innerHTML = output;
    });
};      