package com.example.demo.dao;

import com.example.demo.domain.Study;
import org.springframework.dao.DataAccessException;

import java.util.List;

public interface StudyDao {

	//스터디 등록
	void registerStudy(Study study) throws DataAccessException;
	//스터디 전체 조회
	List<Study> getStudyList() throws DataAccessException;
	//스터디 상세 조회
	Study getStudy(int study_id) throws DataAccessException;
}
