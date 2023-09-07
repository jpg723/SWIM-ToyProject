package com.example.demo.service;

import com.example.demo.dao.StudyDao;
import com.example.demo.domain.Study;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyServiceImpl implements StudyService {

    @Autowired
    private StudyDao studyDao;

    @Override /*새 글 등록*/
    public void registerStudy(Study study) {

        studyDao.registerStudy(study);
    }

    @Override
    public List<Study> getStudyList() {
        return studyDao.getStudyList();
    }
}
