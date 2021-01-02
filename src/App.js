import React from "react"
import logo from './logo.svg';
import './App.css';
import DisplaySelected from "./components/DisplaySelected";
import SubCategory from "./components/SubCategory";
import subCategoryData from "./data/subCategories";
import Footer from "./components/Footer";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedCat: null,
      bgColor: null
    }
    this.setSelectedCategory = this.setSelectedCategory.bind(this)
  }

  setSelectedCategory(selected, selectedColor) {
    console.log(selected)
    this.setState(preState => {
        return {
          selectedCat: selected,
          bgColor: selectedColor
        }
    })
  }

  render() {
        const subCategoriesItems = subCategoryData.map(
            item => <li onClick={() => this.setSelectedCategory(item.name, item.color)}>
                        <SubCategory key={item.id} name={item.name} />
                    </li>
          )
        return (
          <div>
            <div className="Categories-header">
            <p >Categories</p>
                <ul>
                    {subCategoriesItems}
                </ul>
            </div>
            <div className="App">
              <header className="App-header" style={{"backgroundColor": this.state.bgColor}}>
                <p>
                  Basic Picture Viewing App..
                </p>
                <DisplaySelected selectedCatName={this.state.selectedCat}/>
              </header>
            </div>
          <Footer />
          </div>
        )
  }

}

export default App;
