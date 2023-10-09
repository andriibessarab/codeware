import "./CoursesCataloguePage.scss";
import {Link} from "react-router-dom";

const CoursesCataloguePage = () => {
    return (
        <div>
            <div className="courses-container">
                <div className="row">
                    <CourseWidget courseName="Intro to HTML" courseID="0" courseCompletionPercentage="50%" courseLogo={require("../../assets/icons/js-logo.png")}/>
                    <CourseWidget courseName="Intro to Competitive Programming" courseID="1" courseCompletionPercentage="50%" courseLogo={require("../../assets/icons/js-logo.png")}/>
                </div>
                <div className="row">
                    <CourseWidget courseName="test2" courseID="3" courseCompletionPercentage="50%" courseLogo={require("../../assets/icons/js-logo.png")}/>
                    <CourseWidget courseName="test1" courseID="4" courseCompletionPercentage="50%" courseLogo={require("../../assets/icons/js-logo.png")}/>
                </div>
                <div className="row">
                    <CourseWidget courseName="test3" courseID="6" courseCompletionPercentage="50%" courseLogo={require("../../assets/icons/js-logo.png")}/>
                    <CourseWidget courseName="test1" courseID="7" courseCompletionPercentage="50%" courseLogo={require("../../assets/icons/js-logo.png")}/>
                </div>
            </div>
            whatever the hell
        </div>
    )
}

const CourseWidget = props => {
    return (
        <div className="col border-width-medium border-yellow">
            <Link to={props.courseID}>
                <div className="course-overview-container">
                    <div className="course-name-container">
                        <img src={props.courseLogo} alt=""/>
                        <h3>{props.courseName}</h3>
                    </div>
                    <div className="course-prcentage-container">
                        <p>{props.courseCompletionPercentage}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CoursesCataloguePage;