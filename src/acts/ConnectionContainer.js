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
        <div className="mariadb-line line">
          <svg width="234" height="242" viewBox="0 0 234 242" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: -234}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="500" d="M172 182V112C172 84.3858 149.614 62 122 62H60" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="mariadb">
          <Tween {...animItemFadeIn}>
            <MariaDBItem />
          </Tween>
        </div>

        <div className="right-node-line line">
          <svg width="258" height="290" viewBox="0 0 258 290" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 501}} to={{strokeDashoffset: 286}}>
              <path strokeDasharray="500" d="M63 62H168.646V62C189.28 62 206.006 78.7267 206.006 99.3602V116.5H189.5" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
            <Tween from={{strokeDashoffset: -246}} to={{strokeDashoffset: 23}}>
              <path strokeDasharray="500" d="M60 237H133.003H155.506C183.121 237 205.506 214.614 205.506 187V118" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="postre-sql">
          <Tween {...animItemFadeIn}>
            <PostreSQLItem />
          </Tween>
        </div>

        <div className="redis node-container">
          <Tween {...animItemFadeIn}>
            <RedisItem />
          </Tween>
        </div>

        <div className="left-node-line line">
          <svg width="189" height="295" viewBox="0 0 189 295" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 300}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="300" d="M116.235 62.6245H112.742C85.128 62.6245 62.7422 85.0103 62.7422 112.625V182.444C62.7422 210.058 85.128 232.444 112.742 232.444H128.972" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="postre-sql node-container">
          <Tween {...animItemFadeIn}>
            <PostreSQLItem />
          </Tween>
        </div>



        <div className="postre-sql-line line">
          <svg width="100%" height="100%" viewBox="0 0 331 161" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 301}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="300" d="M234 81V81C234 70.5066 225.493 62 215 62H70.491C65.8015 62 62 65.8015 62 70.491V70.491" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="postre-sql java-container">
          <Tween {...animItemFadeIn}>
            <PostreSQLItem />
          </Tween>
        </div>

        <div className="redis-line line">
          <svg width="100%" height="100%" viewBox="0 0 249 211" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 256}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="256" d="M186.348 60.8574V81.2357V98.3143C186.348 125.929 163.962 148.314 136.348 148.314H60.6816" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="redis java-container">
          <Tween {...animItemFadeIn}>
            <RedisItem />
          </Tween>
        </div>

        <div className="mysql-line line php-container">
          <svg width="203" height="238" viewBox="0 0 203 238" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: -167}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="400" d="M62 177V112.5C62 84.8858 84.3858 62.5 112 62.5H134.179" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="mysql php-container">
          <Tween {...animItemFadeIn}>
            <MySQLItem />
          </Tween>
        </div>

        <div className="redis-line line php-container">
          <svg width="203" height="238" viewBox="0 0 203 238" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 408}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="400" d="M60.2598 62.4248H90.0748C117.689 62.4248 140.075 84.8106 140.075 112.425V177.053" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="redis php-container">
          <Tween {...animItemFadeIn}>
            <RedisItem />
          </Tween>
        </div>

    </Timeline>
);

export default ConnectionContainer;