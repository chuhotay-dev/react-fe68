import './App.css';
import FunctionalComponent from './lesson-1/demo-component/FunctionalComponent';
import ClassBasedComponent from './lesson-1/demo-component/ClassBasedComponent';
import Header from './lesson-1/exercise-component/exercise-1/Header';
import Courses from './lesson-1/exercise-component/exercise-1/Courses';
import HomeExercise2 from './lesson-1/exercise-component/exercise-2/HomeExercise2';
import HomeExercise3 from './lesson-1/exercise-component/exercise-3/HomeExercise3';
import ClassDataBinding from './lesson-1/data-binding/ClassDataBinding';

const App = () => {
  return (
    <div className="App">
        {/* Demo Component */}
        {/* <ClassBasedComponent />
        <FunctionalComponent /> */}

        {/* Exercise 1 - Component */}
        {/* <Header />
        <Courses /> */}

        {/* Exercise 2 - Component */}
        {/* <HomeExercise2 /> */}

        {/* Exercise 3 - Component */}
        {/* <HomeExercise3 /> */}

        {/* Data Binding */}
        <ClassDataBinding />
    </div>
  );
}

export default App;
