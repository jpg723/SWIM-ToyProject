package com.example.demo.dao.mybatis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.demo.dao.MemberDao;
import com.example.demo.dao.mybatis.mapper.MemberMapper;
import com.example.demo.domain.Member;


@Repository
public class MybatisMemberDao implements MemberDao {
	
	@Autowired
	private MemberMapper memberMapper;

	@Override //회원가입
	public void registerMember(Member member) throws DataAccessException {
		memberMapper.registerMember(member);
	}

	@Override //로그인
	public Member loginMember(String user_id, String password) throws DataAccessException {
		// TODO Auto-generated method stub
		return memberMapper.loginMember(user_id, password);
	}


}