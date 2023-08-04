package com.example.demo.dao;

import org.springframework.dao.DataAccessException;

import com.example.demo.domain.Member;

public interface MemberDao {
	void registerMember(Member member) throws DataAccessException;
	Member findByIdAndPassword(String user_id, String password) throws DataAccessException;
}
