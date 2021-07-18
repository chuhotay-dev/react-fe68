import './App.css';
import FunctionalComponent from './react-lesson-1/demo-component/FunctionalComponent';
import ClassBasedComponent from './react-lesson-1/demo-component/ClassBasedComponent';
import Header from './react-lesson-1/exercise-component/exsercise-1/Header';
import Courses from './react-lesson-1/exercise-component/exsercise-1/Courses';
import HomeExsercise2 from './react-lesson-1/exercise-component/exercise-2/HomeExsercise2';
import HomeExsercise3 from './react-lesson-1/exercise-component/exercise-3/HomeExercise3';
import ClassDataBinding from './react-lesson-1/data-binding/ClassDataBinding';

const App = () => {
  return (
    <div className="App">
        {/* Demo Component */}
        {/* <ClassBasedComponent />
        <FunctionalComponent /> */}

        {/* Exsercise 1 - Component */}
        {/* <Header />
        <Courses /> */}

        {/* Exsercise 2 - Component */}
        {/* <HomeExsercise2 /> */}

        {/* Exsercise 3 - Component */}
        {/* <HomeExsercise3 /> */}

        {/* Data Binding */}
        <ClassDataBinding />
    </div>
  );
}

export default App;
