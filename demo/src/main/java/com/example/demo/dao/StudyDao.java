package com.example.demo.dao;

import com.example.demo.domain.Study;
import org.springframework.dao.DataAccessException;

public interface StudyDao {
	void registerStudy(Study study) throws DataAccessException;
}
