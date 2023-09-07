package com.example.demo.dao;

import org.springframework.dao.DataAccessException;

import com.example.demo.domain.Member;
import org.springframework.stereotype.Repository;

public interface MemberDao {
	
	//회원가입
	void registerMember(Member member) throws DataAccessException;
	//로그인
	Member loginMember(String user_id, String password) throws DataAccessException;
}
