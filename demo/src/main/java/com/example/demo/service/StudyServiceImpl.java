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

    /*새 글 등록*/
    @Override
    public void registerStudy(Study study) {

        studyDao.registerStudy(study);
    }
    /*스터디 전체 조회*/
    @Override
    public List<Study> getStudyList() {
        return studyDao.getStudyList();
    }
    /*스터디 상세 조회*/
    @Override
    public Study getStudy(int study_id) {
        return studyDao.getStudy(study_id);
    }
    /*댓글 개수 수정*/
    @Override
    public void updateCommentCount(Study study) {
        // TODO Auto-generated method stub
        studyDao.updateCommentCount(study);
    }
}
