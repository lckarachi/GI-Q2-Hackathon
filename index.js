HTML File:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Static Interactive Resume</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <div class="resume-container">
        <!-- left section -->
         <div class="left-section">
            <img src="profile.jfif" alt="Profile Picture" class="profile-picture">
            <section id="objective">
                <h3 style="color: white;">Career Objective </h3>
                <p style="text-align: justify;hyphens: auto;">Active Learning in Generative AI, enabling critical thinking focused on AI-driven solutions by mastering the design, training, and deployment of generative AI models to solve real-world problems. </p>
            </section>

            <section id="certification"></section>
                <h3 style="color: white;">Certifications</h3>
                <p style="text-align: justify;hyphens: auto;"> <b>ABC</b> from , Karachi from Jan to Oct. 2024</p>
                <p style="text-align: justify;hyphens: auto;"> <b> Governor Sindh Initiative for Generative Artificial Intelligence, (ongoing)</p>
           
            </section>
        </div>
            <!-- Right Section -->

            <div class="right-section">
            <h1>Static Interactive Resume</h1>   
                <!-- Personal Information -->
                 <section id="personal-info">
                    <h3>Personal Information</h3>
                    <p><b>Name: </b> Naimat Ullah Khan</p>
                    <p><b>Phone: </b> +923003663512</p>
                    <p><b>Email: </b> <a href="mailto:abc@gmail.com">lckarachi1@gmail.com</a></p>
                    <p><b>LinkedIn: </b> <a href="https://www.linkedin.com/in/ n-u-khan-55752016/" target="_blank">https://www.linkedin.com/</a></p>
 
                 </section>
                    <!-- Education -->
                 <section id="Education">
                    <h3>Education</h3>
                    <p><b>Current: </b> Student of French language diploma at Area Study Centre for Europe, University of Karachi (ongoing)</p>
                    <p><b>Masters: </b> Commonwealth of Learning EMBA from Allama Iqbal Open University (2011-2014)</p>
                    <p><b>Bachelors: </b> BA Hons Islamic Studies with Computer Technology from SZIC, University of Karachi(1002-1994)</p>
                    <p><b>Intermediate: </b> FSc. Pre Engineering from Govt. Islamia Science College, Karachi (1990-1991)</p>
                    <p><b>Matriculaton: </b> SSC. Science from GBSS Maqboolabad, Karachi (1989)</p>
                </section>
    <!-- Skills -->
    <section id="skills">
        <h3>Skills</h3>
        <ul>
            <li> Public Diplomacy</li>
            <li> Virtual Assistant</li>
            <li> Blockchain</li>
            <li> Information Management</li>
            <li> HTML, CSS, TypeScript</li>
            </ul>
        
    </section>
    <!-- Work Experience -->
    <section id="Work Experience">
        <h3>Work Experience</h3>
        <p><b>Company: </b> EU TA PINS -Programme for Imroving Nutrition in Sindh</p>
        <p><b>Role: </b> Programme Officer (2022-2023)</p>
        <p><b>Company: </b> Canadian University Application Centre-CUAC </p>
        <p><b>Role: </b> Manager- Country Office Pakistan (2020-2021)</p>
        <p><b>Company: </b> Nelson Delton</p>
        <p><b>Role: </b> Manager Sourcing (2019-2020)</p>
        <p><b>Company: </b> Education above all - Take a Child to School- British Council</p>
        <p><b>Role: </b> Programme Coordinator Sindh Balochistan (2018)</p>
        <p><b>Company: </b> EU TA SESSP Sindh Education Sector Support Programme-British Council</p>
        <p><b>Role: </b> Programme Coordinator (2016-2018)</p>
        <p><b>Company: </b> Pakistan American Cultural Centre, PACC</p>
        <p><b>Role: </b> Officer Cultural Programs (2014-2015)</p>
        <p><b>Company: </b>Lincoln Corner Karachi- Rangoonwala Community Centre</p>
        <p><b>Role: </b> Programme Coordinator (2007- 2014)</p>
                                     
    </section>
 <!-- Button to toggle Skill Section -->
  <button id="toggle-section"> <b> Hide/Show Skills</b> </button>

                    </div>

    </div>  
    <script src="script.js"></script>
    
</body>
</html>  