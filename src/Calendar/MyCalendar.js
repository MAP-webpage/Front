
import {Link} from "react-router-dom";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React, { Component } from 'react'; // Component를 추가하여 import



class MyCalendar extends Component {
  constructor(props) {
      super(props);
      this.state = {
          events: [
              { title: 'Event 1', start: '2025-02-01' }
          ],
          newEvent: {
              title: '',
              description: '',
              location: '',
              start: '',
              end: ''
          }
      };
  }

  // 일정 추가
  handleSave = () => {
      const { newEvent } = this.state;
      if (!newEvent.title || !newEvent.start) {
          alert("이벤트 제목과 시작 날짜는 필수입니다!");
          return;
      }

      // 새 이벤트 생성
      const event = {
          title: `${newEvent.title}${newEvent.description ? ` - ${newEvent.description}` : ''}`, 
          start: newEvent.start,
          end: newEvent.end || newEvent.start, // 종료 날짜가 없으면 시작 날짜로 설정
          location: newEvent.location 
      };

      //뭔가 이상함 일정 저장이 안됨!!!!!
      // 상태 업데이트
      this.setState((prevState) => ({
          events: [...prevState.events, event],
          newEvent: { title: '', description: '', location: '', start: '', end: '' }
      }));
  };

  handleChange = (e) => {
      const { name, value } = e.target;
      this.setState((prevState) => ({
          newEvent: { ...prevState.newEvent, [name]: value }
      }));
  };

  render() {
      return (
          <div>
              <h2>📅 My Calendar</h2>
              
              {/* 캘린더 */}
              <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  events={this.state.events}
              />

              {/* 일정 추가 폼 */}
              <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                  <h3>새 일정 추가</h3>
                  <input type="text" name="title" placeholder="제목" value={this.state.newEvent.title} onChange={this.handleChange} />
                  <input type="text" name="description" placeholder="설명 (선택)" value={this.state.newEvent.description} onChange={this.handleChange} />
                  <input type="date" name="start" value={this.state.newEvent.start} onChange={this.handleChange} />
                  <input type="date" name="end" value={this.state.newEvent.end} onChange={this.handleChange} />
                  <input type="text" name="location" placeholder="위치 (선택)" value={this.state.newEvent.location} onChange={this.handleChange} />
                  
                  <button onClick={this.handleSave} style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}>
                      일정 추가
                  </button>
              </div>
          </div>
      );
  }
}

export default MyCalendar;