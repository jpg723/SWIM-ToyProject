package com.example.demo.dao.mybatis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.demo.dao.MemberDao;
import com.example.demo.dao.mybatis.mapper.MemberMapper;
import com.example.demo.domain.Member;


@Repository
public class MybatisMemberDao implements MemberDao {
	
	@Autowired
	private MemberMapper memberMapper;

	@Override
	public void registerMember(Member member) throws DataAccessException {
		memberMapper.registerMember(member);
	}

	@Override
	public Member findByIdAndPassword(String user_id, String password) throws DataAccessException {
		// TODO Auto-generated method stub
		return memberMapper.findByIdAndPassword(user_id, password);
	}


}