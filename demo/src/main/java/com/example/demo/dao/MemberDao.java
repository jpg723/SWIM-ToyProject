package com.example.demo.dao;

import org.springframework.dao.DataAccessException;

import com.example.demo.domain.Member;

public interface MemberDao {
	void registerMember(Member member) throws DataAccessException;
}
