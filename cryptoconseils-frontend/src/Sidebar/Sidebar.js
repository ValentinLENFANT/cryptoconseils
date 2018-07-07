import React, { Component } from 'react';
import Categories from './Categories';
import Archives from './Archives';
import RecentPosts from './RecentPosts';
import Tag from './Tag';
class Sidebar extends Component {

  render() {
    return(
      <div className="Sidebar Component">
      {/* Sidebar Starts */}
        <div className="sidebar col-xs-12 col-md-4">
          {/* Categories Widget Starts */}
            <Categories/>
          {/* Categories Widget Ends */}
          {/* Archives Widget Starts */}
            <Archives/>
          {/* Archives Widget Ends */}
          {/* Latest Posts Widget Ends */}
            <RecentPosts/>
          {/* Latest Posts Widget Ends */}
          {/* Tags Widget Starts */}
            <Tag/>
          {/* Tags Widget Ends */}
        </div>
        {/* Sidebar Ends */}
      </div>
    );
  }
}

export default Sidebar;
