package com.example.demo.dao.mybatis.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Member;

@Mapper
public interface MemberMapper {

	void registerMember(Member member);
	Member findByIdAndPassword(String user_id, String password);
}