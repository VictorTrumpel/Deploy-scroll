import {Tween, Timeline} from 'react-gsap';
import {animItemFadeIn} from "../static/animScripts/animScripts";
import React from "react";
import PostreSQLItem from "../static/items/PostreSQLItem";
import RedisItem from "../static/items/RedisItem";
import MySQLItem from "../static/items/MySQLItem";
import MariaDBItem from "../static/items/MariaDBItem";


const ConnectionContainer = ({progress}) => (
    <Timeline
        progress={progress}
        paused
    >
      <div className="progress-list-deploy connection-container">

        <div className="mariadb">
          <Tween {...animItemFadeIn}>
            <MariaDBItem />
          </Tween>
        </div>

        <div className="postre-sql">
          <Tween {...animItemFadeIn}>
            <PostreSQLItem />
          </Tween>
        </div>


        <div className="postre-sql-line line">
          <svg width="100%" height="100%" viewBox="0 0 331 161" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 256}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="256" d="M270.897 98.137H241.179C231.331 98.137 223.348 90.1538 223.348 80.306V80.306C223.348 70.4582 215.365 62.475 205.517 62.475H70.5105C65.8211 62.475 62.0195 66.2765 62.0195 70.9659V70.9659" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="java-container">
          <div className="postre-sql">
            <Tween {...animItemFadeIn}>
              <PostreSQLItem />
            </Tween>
          </div>

          <div className="redis">
            <Tween {...animItemFadeIn}>
              <RedisItem />
            </Tween>
          </div>
        </div>


        <div className="redis-line line">
          <svg width="100%" height="100%" viewBox="0 0 249 211" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 256}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="256" d="M186.348 60.8574V81.2357V98.3143C186.348 125.929 163.962 148.314 136.348 148.314H60.6816" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="php-line line">
          <svg width="100%" height="100%" viewBox="0 0 277 238" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 400}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="400" d="M62.0859 177.053V112.425C62.0859 84.8106 84.4717 62.4248 112.086 62.4248H134.259H164.074C191.688 62.4248 214.074 84.8106 214.074 112.425V177.053" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="php-container">
          <div className="mysql">
            <Tween {...animItemFadeIn}>
              <MySQLItem />
            </Tween>
          </div>

          <div className="redis">
            <Tween {...animItemFadeIn}>
              <RedisItem />
            </Tween>
          </div>
        </div>



        <div className="left-node-line line">
          <svg width="189" height="295" viewBox="0 0 189 295" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 300}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="300" d="M116.235 62.6245H112.742C85.128 62.6245 62.7422 85.0103 62.7422 112.625V182.444C62.7422 210.058 85.128 232.444 112.742 232.444H128.972" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="right-node-line line">
          <svg width="258" height="290" viewBox="0 0 258 290" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 300}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="300" d="M158.607 62.6245V62.6245C179.24 62.6245 195.967 79.3513 195.967 99.9847V177.349C195.967 204.963 173.581 227.349 145.967 227.349H60.9609" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="node-container">
          <div className="postre-sql">
            <Tween {...animItemFadeIn}>
              <PostreSQLItem />
            </Tween>
          </div>
          <div className="redis">
            <Tween {...animItemFadeIn}>
              <RedisItem />
            </Tween>
          </div>
        </div>


      </div>
    </Timeline>
);

export default ConnectionContainer;