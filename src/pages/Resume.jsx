import portfolioImage from '../assets/documents/Anthony_Iacano_Resume.png';

// <!--Start of the Resume Page-->
export default function Resume(){
    return(
        <>
            <div id = "resume-box" className="about">
                <img id="resume-img" src={portfolioImage} alt="Anthony's Resume"></img>
                <div id="resume-button-border"><a href="..\src\assets\documents\Anthony_Iacano_Resume.pdf" download="Anthony_Iacano_Resume.pdf" id="resume-link"><button className="button"id="resume-button">Download Resume</button></a></div>
            </div>
        </>
    );
}