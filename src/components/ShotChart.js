import React from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';

window.d3_hexbin = {hexbin : hexbin}; // workaround library problem

export class ShotChart extends React.Component {
   static propTypes = {
       playerId: PropTypes.number.isRequired,
   }

   componentDidMount() {
       nba.stats.shots({
           PlayerID: this.props.playerId,
           Season: "2017-18"
       }).then((response) => {
           const final_shots = response.shot_Chart_Detail.map(shot => ({
               x: (shot.locX + 250) / 10,   // 250 是中心轴的位置
               y: (shot.locY + 50) / 10,    // 50 
               action_type: shot.actionType,
               shot_distance: shot.shotDistance,
               shot_made_flag: shot.shotMadeFlag,
           }));

           console.log(response);

           const courtSelection = d3.select("#shot-chart");
           const chart_court = court().width(500);
           const chart_shots = shots().shotRenderThreshold(10).displayToolTips(true).displayType("hexbin");
           courtSelection.call(chart_court);
           courtSelection.datum(final_shots).call(chart_shots);
       });
   }

   render() {
       return (
           <div id="shot-chart"></div>
       );
   }
}
