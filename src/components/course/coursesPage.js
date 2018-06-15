import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import{bindActionCreators} from 'redux';
import * as CourseAction from '../../actions/courseActions';
import CourseList from './courseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render () {
    const {courses} = this.props;

    return (
      <div>
          <h1>Courses</h1>
          <input type="submit"
            value="Add Course"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage}
          />
          <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(CourseAction.createCourse(course))
    // createCourse: bindActionCreators(CourseAction.createCourse, dispatch)
    actions: bindActionCreators(CourseAction, dispatch)
  };
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
