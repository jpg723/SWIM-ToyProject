package com.example.demo.service;

import com.example.demo.domain.Member;
import com.example.demo.domain.Study;

import java.util.List;

public interface StudyService {

    void registerStudy(Study study); //스터디 등록
    List<Study> getStudyList(); //스터디 리스트 조회
}
